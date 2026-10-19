#Once by importing the whole module
print("Once by importing the whole module : import operators")
import operators
print(operators.addOperator(2,3))
print(operators.divideOperator(4,2))

#The second time by importing specific functions.
from operators import addOperator
from operators import divideOperator
print("The second time by importing specific functions")
print(addOperator(2,3))
print(divideOperator(4,2))

#The third time by using alias.
print("The third time by using alias : import operators as op")
import operators as op
print(op.addOperator(2,3))
print(op.divideOperator(4,2))