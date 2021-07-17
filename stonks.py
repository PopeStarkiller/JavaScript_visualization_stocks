import json
import requests



def api_call():

    api_key = "5GrLRCwNWbeZKxsT8cXz"
    ticker_list = ["AAPL", "MSFT", "AMZN", "FB", "GOOG"]
    base_url = "https://www.quandl.com/api/v3/datasets/WIKI/"
    dates = "start_date=2010-10-01&end_date=2019-10-01"
    api = "&api_key=" + api_key

    stock_list = []
    stock_dict = {}
    ticker = ""
    steve = (len(ticker_list) + 1)
    for i in range(0,steve):
        holder = i - 1
        if i > 0:
            stock_dict[ticker_list[holder]] = stock_list
            stock_list = []
        if i < steve:
            url= base_url + ticker_list[holder] + ".json?" + dates +api
            response = requests.get(url).json()
            
            for x in range(0, len(response['dataset']['data'])):
                temp_dict = {}
                temp_dict[response['dataset']['column_names'][0]] = response['dataset']['data'][x][0]
                temp_dict[response['dataset']['column_names'][4]] = response['dataset']['data'][x][4]
                temp_dict[response['dataset']['column_names'][5]] = response['dataset']['data'][x][5]
                stock_list.append(temp_dict)

    return stock_dict
