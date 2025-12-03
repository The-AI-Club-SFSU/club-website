"""
Convert HEIC images to WebP format.

Requirements:
    pip install pillow pillow-heif

Usage:
    python scripts/convert_heic_to_webp.py
"""

import os
from pathlib import Path

try:
    from PIL import Image
    import pillow_heif
except ImportError:
    print("Missing dependencies. Install with:")
    print("  pip install pillow pillow-heif")
    exit(1)

# Register HEIF opener with Pillow
pillow_heif.register_heif_opener()

# Paths
GALLERY_DIR = Path(__file__).parent.parent / "public" / "images" / "gallery"
HEIC_EXTENSIONS = {".heic", ".HEIC", ".heif", ".HEIF"}


def convert_heic_to_webp():
    if not GALLERY_DIR.exists():
        print(f"Gallery directory not found: {GALLERY_DIR}")
        return

    heic_files = [f for f in GALLERY_DIR.iterdir() if f.suffix in HEIC_EXTENSIONS]

    if not heic_files:
        print("No HEIC files found in gallery.")
        return

    print(f"Found {len(heic_files)} HEIC file(s) to convert.\n")

    for heic_path in heic_files:
        webp_path = heic_path.with_suffix(".webp")
        
        try:
            print(f"Converting: {heic_path.name} -> {webp_path.name}")
            
            with Image.open(heic_path) as img:
                # Convert to RGB if necessary (for transparency handling)
                if img.mode in ("RGBA", "P"):
                    img = img.convert("RGB")
                
                # Save as WebP with good quality
                img.save(webp_path, "WEBP", quality=85)
            
            print(f"  ✓ Saved: {webp_path.name}")
            
            # Delete the original HEIC file
            os.remove(heic_path)
            print(f"  ✓ Deleted original: {heic_path.name}")
            
        except Exception as e:
            print(f"  ✗ Error converting {heic_path.name}: {e}")

    print("\nDone! Remember to update your gallery.ts URLs to use .webp extension.")


if __name__ == "__main__":
    convert_heic_to_webp()

