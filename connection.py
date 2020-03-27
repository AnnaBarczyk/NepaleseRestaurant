import csv
import os
import json

DATA_FILE_PATH = os.getenv('DATA_FILE_PATH') if 'DATA_FILE_PATH' in os.environ else 'menu_list.csv'
DATA_HEADER = ['chapter', 'id', 'eng_name', 'pol_name', 'price']


def reader_csv(filename):
    rows = csv.DictReader(open(filename))
    return rows


def writer(requests):
    with open('menu_list.csv', 'w') as my_file:
        writer = csv.DictWriter(my_file, fieldnames=DATA_HEADER)
        writer.writeheader()
        for request in requests:
            writer.writerow(request)
    return []


def open_json_settings():
    with open('settings.json') as file:
        data = json.load(file)
    return data
