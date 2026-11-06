"""Crop product category photographs from the Aline poster into web assets."""

from pathlib import Path
from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "public/images/imagees/Aline Construction Materials Supply Poster.png"
OUTPUT = ROOT / "public/images/products"

# Boxes select the product photography while excluding the poster's text labels.
CROPS = {
    "cement": (18, 282, 280, 452),
    "iron-sheets": (520, 280, 824, 457),
    "steel-bars": (1039, 280, 1362, 458),
    "gutters": (18, 510, 281, 665),
    "nails": (488, 508, 761, 661),
    "water-pipes": (972, 512, 1312, 663),
    "discs-baguette-accessories": (17, 714, 282, 874),
    "disc": (20, 720, 137, 854),
    "baguette": (135, 721, 262, 798),
    "amaco-paint": (175, 795, 277, 870),
    "cutting-scraping-tools": (435, 745, 817, 896),
    "cutting-tools": (436, 745, 565, 875),
    "machete": (588, 738, 683, 892),
    "hammer": (687, 737, 817, 895),
    "door-locks": (833, 728, 1020, 875),
    "mastic-sealant": (1224, 706, 1381, 902),
}


def main() -> None:
    if not SOURCE.is_file():
        raise FileNotFoundError(f"Poster not found: {SOURCE}")

    OUTPUT.mkdir(parents=True, exist_ok=True)
    with Image.open(SOURCE) as poster:
        for name, box in CROPS.items():
            crop = poster.crop(box)
            destination = OUTPUT / f"{name}.jpg"
            crop.save(destination, format="JPEG", quality=94, optimize=True, progressive=True)
            print(f"{destination.relative_to(ROOT)}: {crop.width}x{crop.height}")


if __name__ == "__main__":
    main()
