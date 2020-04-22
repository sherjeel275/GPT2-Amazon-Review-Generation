files_to_read = ['reviews_test.txt', 'reviews_valid.txt', 'reviews_train.txt']
fout = open('processed_human_reviews.csv', 'w')
for file_name in files_to_read:
    fin = open(file_name, 'r')
    next_line = fin.readline()
    while len(next_line) > 0:
        full_current_review = next_line.strip()
        if full_current_review.find('.') != -1 or full_current_review.find('!') != -1 or full_current_review.find('?') != -1:
            last_period_index = min(800, len(full_current_review))
            if last_period_index == 800:
                while full_current_review[last_period_index] != '.' and full_current_review[last_period_index] != '?' and full_current_review[last_period_index] != '!':
                    last_period_index -= 1
            fout.write(full_current_review[:last_period_index + 1] + '\n')
        current_review_array = []
        next_line = fin.readline()