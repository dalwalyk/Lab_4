import datetime

# Input your birthdate in the format of year, month, day
birthdate = datetime.date(2000, 12, 31)

# Calculate the number of seconds from your birthdate to the current datetime
seconds_old = (datetime.datetime.now() - datetime.datetime.combine(birthdate, datetime.time.min)).total_seconds()

print("You are", seconds_old, "seconds old!")

