import random
from collections import Counter

# Начальные коэффициенты
PAIR_COEFF = 0.95
FULL_HOUSE_COEFF = PAIR_COEFF * 2
YATHZEE_COEFF = PAIR_COEFF * 3
THREE_PAIRS_COEFF = PAIR_COEFF * 4
TEMP_USERS_BALANCE = 1000000

def simulate_game(num_bets, pair_coeff):
    full_house_coeff = pair_coeff * 2
    yathzee_coeff = pair_coeff * 3
    three_pairs_coeff = pair_coeff * 4

    total_bets = 0
    total_wins = 0

    for _ in range(num_bets):
        gamble_result = [random.randint(1, 6) for _ in range(6)]
        counts = Counter(gamble_result)
        values = sorted(counts.values(), reverse=True)

        bet = 1000
        total_bets += bet

        win = 0
        if values == [6]:
            win = bet * yathzee_coeff
        elif values == [4, 2]:
            win = bet * full_house_coeff
        elif values == [2, 2, 2]:
            win = bet * three_pairs_coeff
        elif any(v >= 2 for v in values):
            win = bet * pair_coeff
        # else win = 0

        total_wins += win

    return (total_wins / total_bets) * 100


def find_best_pair_coeff(target_rtp=95.0, num_bets=1000000, tolerance=0.001):
    pair_coeff =  0.8557133724715513
    step = 0.001
    max_iterations = 10000

    for i in range(max_iterations):
        rtp = simulate_game(num_bets, pair_coeff)
        print(f"Проверка: PAIR_COEFF = {pair_coeff} => RTP = {rtp}%")

        if abs(rtp - target_rtp) <= tolerance:
            return pair_coeff

        if rtp < target_rtp:
            pair_coeff += step
        else:
            pair_coeff -= step
            step /= 2  # уменьшаем шаг для точности

    return pair_coeff


simulate_game(100000, 0.8557133724715513)

best_coeff = find_best_pair_coeff()
print(f"\nНайденный PAIR_COEFF для RTP ≈ 95%: {best_coeff}")
print(f"FULL_HOUSE_COEFF = {best_coeff*2}")
print(f"YATHZEE_COEFF = {best_coeff*3}")
print(f"THREE_PAIRS_COEFF = {best_coeff*4}")