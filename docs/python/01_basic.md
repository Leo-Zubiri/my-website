# First steps

**Hello World**

```py
print("Hello World")
```

**String Manipulation**
- Concatenation

```py
print("Hello World\nHey there!")
print("Hello"+" "+"there")
```

**Inputs**

```py
name = input("What is your name?")
print("Hello "+name)
```

**Primitive data types&**

- Strings
- Integers
- Floats
- Booleans

```py
print("Hello"[0]) #print 'H' : index 0
print("Hello"[-1]) #print 'o' : last index

my_string = "1234"
my_number = 1234
my_float_number = 1.234
my_float2 = 100_000_000 # 100,000,000 instead of commas we can use underscore _
my_boolean = False
```

**Data Types**

Get the data type of a variable
```py
print(type("Hello")) # class str
print(type(1234)) # class int
print(type(3.15)) # class float
print(type(True)) # class bool
```

**Casting variable**
- int()
- float()
- str()
- bool()

```py
number = int("1234")
b = bool(1)
```

**Mathematical operations**

Always consider the operators priority order

*PEMDAS*
- Parentheses
- Exponents
- Multiplication / division
- Addition
- Sustraction

```py
print(4+3) # 7
print(7-3) # 4
print(3*2) # 6
print(5/3) # 1.666666
print(5//3) # 1 Without decimals
print(3**2) # 9 exponent
print(10%5) # Modulo 10 / 5 = 2 then modulo = 0
```

**F String**

```py
age = 18
print(f"I am {age} years old")
```

**Conditional statements**

Comparison Operators
- **>** Greater than
- **<** Less than
- **>=** Greater than or equal to
- **<=** Less than or equal to
- **==** Equal to
- **!=** Not equal to

```py
height = 120
if height > 100:
    print("A")
elif height > 60:
    print("B")
else:
    print("C")
```