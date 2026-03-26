#!/bin/bash

ASSETS_DIR="src/assets"
TEMP_DIR="src/assets/temp"
mkdir -p "$TEMP_DIR"

optimize_image() {
    local src="$1"
    local base=$(basename "$src" | cut -d. -f1)
    local ext="${src##*.}"
    local target_width="$2"
    local suffix="$3"
    
    echo "Optimizing $src to ${base}${suffix}.jpg (max width: $target_width)"
    
    # Convert to JPEG, resize, and compress
    sips -s format jpeg -s formatOptions 75 -Z "$target_width" "$src" --out "$TEMP_DIR/${base}${suffix}.jpg" > /dev/null
}

# 1. About Photos (currently ~2.7MB PNGs)
optimize_image "$ASSETS_DIR/about-photo-1.png" 1200 "-lg"
optimize_image "$ASSETS_DIR/about-photo-1.png" 800 "-md"
optimize_image "$ASSETS_DIR/about-photo-1.png" 400 "-sm"

optimize_image "$ASSETS_DIR/about-photo-2.png" 1200 "-lg"
optimize_image "$ASSETS_DIR/about-photo-2.png" 800 "-md"
optimize_image "$ASSETS_DIR/about-photo-2.png" 400 "-sm"

# 2. Pet Clients (currently ~2.5MB JPEGs)
for i in {1..5}; do
    optimize_image "$ASSETS_DIR/pet-client-$i.jpg" 1000 "-lg"
    optimize_image "$ASSETS_DIR/pet-client-$i.jpg" 600 "-md"
    optimize_image "$ASSETS_DIR/pet-client-$i.jpg" 300 "-sm"
done

# 3. Duck Watercolor (currently 1.2MB PNG)
optimize_image "$ASSETS_DIR/duck-watercolor-clean.png" 800 "-lg"
optimize_image "$ASSETS_DIR/duck-watercolor-clean.png" 400 "-md"
optimize_image "$ASSETS_DIR/duck-watercolor-clean.png" 200 "-sm"

# 4. Hero Background (currently 900KB JPEG)
optimize_image "$ASSETS_DIR/hero-v11.jpg" 1920 "-lg"
optimize_image "$ASSETS_DIR/hero-v11.jpg" 1200 "-md"
optimize_image "$ASSETS_DIR/hero-v11.jpg" 800 "-sm"

echo "Done! Optimized images are in $TEMP_DIR"
