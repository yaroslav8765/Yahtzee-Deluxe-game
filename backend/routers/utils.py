import random

def roll_dices():
    return [random.randint(1, 6) for _ in range(6)]