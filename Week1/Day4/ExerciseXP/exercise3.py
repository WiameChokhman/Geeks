# Exercise 3 : Zara
brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {
        "France": "blue",
        "Spain": "red",
        "US": ["pink", "green"]}   
}
brand["number_stores"] = 2
print(f"Zara's clients are  {', '.join(brand['type_of_clothes'])}")
brand["country_creation"] = "Spain"
if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")
brand.pop("creation_date")
print(brand["international_competitors"][-1])
print(f"The major colors in the US are {', '.join(brand['major_color']['US'])}")
print(f"Length of the dictionary: {len(brand)}")
print(f"Keys of the dictionary: {', '.join(brand.keys())}")
more_on_zara = {
    "creation_date": 1975,
    "number_stores": 10000}
brand.update(more_on_zara)
print(f"Number of stores: {brand['number_stores']}")
print("the number of stores has been updated to 10000 because the update method replaces the existing value of the 'number_stores' key with the new value provided in the 'more_on_zara' dictionary")

