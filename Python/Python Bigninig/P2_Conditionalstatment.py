num = int(input("Enter number:"));
for j in range(0,num):
    for i in range(0,j):
        print("*",end="")
    print("")

while num>0:
    print("*"*num)
    num-=1