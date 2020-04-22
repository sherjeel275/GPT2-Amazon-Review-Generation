import json

files_to_read = ['Website Text Data - Beauty.tsv', 'Website Text Data - Clothes, Shoes, & Jewelry.tsv', 'Website Text Data - Movies & Music.tsv', 'Website Text Data - Toys_Games, Electronics.tsv', 'Website Text Data - Video Games, Books.tsv']

fout = open('processed_reviews_talk_to_transformer.csv', 'w')

for file_name in files_to_read:
    fin = open(file_name, 'r')
    raw_line = fin.readline() # ignore column names
    raw_line = fin.readline()
    while len(raw_line) > 0:
        split_by_tabs = raw_line.split("	") # split on tabs, if the review text contains tabs then this will cause problems
        # review_json = json.loads(split_by_tabs[2])
        # review_text = review_json["reviewText"] # extract review text
        # cleaned_reviews = review_text.replace('\n', ' ') # remove newlines
        generated_review = split_by_tabs[4]
        if generated_review.find('.') != -1 or generated_review.find('!') != -1 or generated_review.find('?') != -1:
            last_period_index = len(generated_review) - 1
            while generated_review[last_period_index] != '.' and generated_review[last_period_index] != '?' and generated_review[last_period_index] != '!':
                last_period_index -= 1
            fout.write(generated_review[:last_period_index + 1] + "\n")
        else:
            fout.write(generated_review + "\n")
        raw_line = fin.readline()