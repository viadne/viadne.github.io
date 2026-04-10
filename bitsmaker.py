import os
import json

blogimagesPath = "public/assets/img"
imgs = os.scandir(blogimagesPath)
writtensPath = "public/assets/writtens"
bits = json.load(open("bits.json", "r"))

addedImages = set([bit["img"] for bit in bits])
unaddedImgs = [img.path for img in imgs if img.path not in addedImages]

unaddedImgs.sort(reverse = True)

for file in unaddedImgs:
    bits.append({"img": file})




json.dump(bits, open("bits.json", "w"), indent=4)