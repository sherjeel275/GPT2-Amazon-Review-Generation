fin = open('generated_reviews (test) gpt2-medium.txt', 'r')
fout = open('processed_gpt2_medium_reviews.csv', 'w')
next_line = fin.readline()
current_review_array = []
while len(next_line) > 0:
    if next_line.find('====== GENERATION ') == 0 or next_line.find('https://www.amazon.com/dp/') == 0:
        full_current_review = ' '.join(current_review_array)
        if full_current_review.find('.') != -1 or full_current_review.find('!') != -1 or full_current_review.find('?') != -1:
            last_period_index = min(800, len(full_current_review))
            if last_period_index == 800:
                while full_current_review[last_period_index] != '.' and full_current_review[last_period_index] != '?' and full_current_review[last_period_index] != '!':
                    last_period_index -= 1
            fout.write(full_current_review[:last_period_index + 1] + '\n')
        current_review_array = []
    else:
        stripped_line = next_line.strip()
        if len(stripped_line) > 0:
            current_review_array.append(stripped_line)
    next_line = fin.readline()