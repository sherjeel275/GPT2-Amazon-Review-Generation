files_to_read = ['generated_reviews (valid).txt', 'generated_reviews (test).txt']
fout = open('processed_fine_tuned_reviews.csv', 'w')
for file_name in files_to_read:
    fin = open(file_name, 'r')
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