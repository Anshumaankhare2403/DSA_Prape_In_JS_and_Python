car = ["bmw","audi","maruti"]
print(car)
car[1:2]=["lambogerni","audi"]
for i in car:
    print(i)
print(car)


# list comprehension
mtlit = [123, 231, 234, 232, 243]

newlist = [x for x in mtlit if x % 10 == 3]

print(newlist)