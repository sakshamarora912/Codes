#VARIABLES
a_122 = '''harry'''
# a = 'harry'
# a = "harry"
b = 345
c = 45.32
d = True
# d = None

# Printing the variables
print(a)
print(b)
print(c)
print(d)

# Printing the type of variables
print(type(a))
print(type(b))
print(type(c))
print(type(d))

#OPERATORS

a = 3
b = 4

# Arithmetic Operators
print("The value of 3+4 is ", 3+4)
print("The value of 3-4 is ", 3-4)
print("The value of 3*4 is ", 3*4)
print("The value of 3/4 is ", 3/4)

# Assignment Operators
a = 34
a -= 12
a *= 12
a /= 12
print(a)

# Comparison Operators
# b = (14<=7)
# b = (14>=7)
# b = (14<7)
# b = (14>7)
# b = (14==7)
b = (14!=7)
print(b)

# Logical Operators
bool1 = True
bool2 = False
print("The value of bool1 and bool2 is", (bool1 and bool2))
print("The value of bool1 or bool2 is", (bool1 or bool2))
print("The value of not bool2 is", (not bool2))


#typecasting 
a = "35fgrfg34"
a = int(a)
print(type(a))
print(a + 5)

#input function
a = input("Enter a number: ")
a = int(a) # Convert a to an Integer(if possible)
print(type(a))

#add two numbers
a = 30
b = 15
print("The sum of a and b is", a + b)

#remainder
a = 458
b = 15
print("The remainder when a is divided by b is", a%b)

#average
a = input("Enter first number: ")
b = input("Enter second number: ")
a = int(a)
b = int(b)
avg = (a + b)/2
print("The average of a and b is", avg)
