import os
import json

# run this from root

blogimagesPath = "public\\assets\\img"
imgs = os.scandir(blogimagesPath)
writtensPath = "public/assets/writtens"
bits = json.load(open("data\\bits.json", "r"))

addedImages = set([bit["img"] for bit in bits])
allNewImgs = [img.path.removeprefix("public\\") for img in imgs]
unaddedImgs = [ img for img in allNewImgs if img not in addedImages]

print(unaddedImgs)
unaddedImgs.sort(reverse = False)

for file in unaddedImgs:
    # bits.append({"img": file})
    bits.insert(2, {"img": file})




json.dump(bits, open("data\\bits.json", "w"), indent=4)