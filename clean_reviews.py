import json

fin = open('Website Text Data - Video Games, Books.tsv', 'r') # tab delimited file
fout = open('cleaned_reviews_games_books.txt', 'w')
raw_line = fin.readline() # ignore column names
raw_line = fin.readline()
while len(raw_line) > 0:
    split_by_tabs = raw_line.split("	") # split on tabs, if the review text contains tabs then this will cause problems
    review_json = json.loads(split_by_tabs[2])
    review_text = review_json["reviewText"] # extract review text
    cleaned_reviews = review_text.replace('\n', ' ') # remove newlines
    fout.write(cleaned_reviews + "	" + split_by_tabs[4] + "\n") # insert tab
    raw_line = fin.readline()