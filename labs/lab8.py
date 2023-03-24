import requests
from bs4 import BeautifulSoup

# Define the URL for the location's weather page
location_url = 'https://www.weather.gov/{}'.format('your-location')

# Send a request to the webpage and store the response
response = requests.get(location_url)

# Parse the HTML content of the webpage using BeautifulSoup
soup = BeautifulSoup(response.content, 'html.parser')

# Extract the current temperature, weather condition, and wind speed
temp = soup.find('p', {'class': 'myforecast-current-lrg'}).text.strip()
condition = soup.find('p', {'class': 'myforecast-current'}).text.strip()
wind = soup.find('td', {'class': 'text-right'}).text.strip()

# Print the extracted data
print('Current temperature: {}\nWeather condition: {}\nWind speed: {}'.format(temp, condition, wind))
