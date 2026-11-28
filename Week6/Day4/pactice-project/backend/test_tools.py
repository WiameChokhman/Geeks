
from tools import execute_tool

# Test 1: Invalid argument type
result1 = execute_tool(
    name="get_order_status",
    arguments={"order_id": 104},
    user_message="Where is A104?"
)

print("Test 1:", result1)


# Test 2: Unknown tool
result2 = execute_tool(
    name="unknown_operation",
    arguments={},
    user_message="Hello"
)

print("Test 2:", result2)

