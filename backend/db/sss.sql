create database achievement
go
use achievement
create table Users
(
	--משתמשים
	Tz nvarchar(9) primary key,
	FirstName nvarchar(10),
	LastName nvarchar(10),
	Email nvarchar(20),
	Pasword nvarchar(20),
	Phone nvarchar(10),
	Gender nvarchar(8)
)
go
create table Targets
(
	--יעדים
	IdTargets int identity primary key,
	TzUser nvarchar(9) foreign key references Users(Tz),
	Description nvarchar(20),
	IdAlertFrequencyTypes int foreign key references AlertFrequencyTypes(IdAlertFrequencyTypes), 
	StartDate date,
	EndDate date,
	SeveralTimesADay int
)

go 
create table FrequencyTypes
(
	--סוגי תדירות-ימים בשבוע\אחת לשבועים\חודשי\כל יום
	IdFrequencyTypes int identity primary key,
	Description nvarchar(20),
)
go 
create table Frequency
(
	--תדירות
	IdFrequency int identity primary key,
	IdTargets int foreign key references Targets(IdTargets),
	IdFrequencyTypes int foreign key references FrequencyTypes(IdFrequencyTypes), 
	Note nvarchar(20)
)
go 
create table Performence
(
	--ביצוע משימות בפועל
   IdPerformence int identity primary key,
   IdTargets int foreign key references Targets(IdTargets),
   ExecutionDate date,
   CountPerformence int
)
go 
create table AlertTypes
(
	--סוגי התראות
	IdAlertTypes int identity primary key,
	Description nvarchar(20),
)
go
create table AlertFrequencyTypes
(
	--סוגי תדירות להתראות
	IdAlertFrequencyTypes int identity primary key,
	Description nvarchar(20),
)
go
create table AlertDates
(
  --תאריך התראה
  IdAlertDate int identity primary key,
  IdTargets int foreign key references Targets(IdTargets),
  Date nvarchar(20)
)
go
create table AlertHours
(
	--שעת התראה
	IdAlertHours int identity primary key,
	IdTargets int foreign key references Targets(IdTargets),
	IdAlertTypes int foreign key references AlertTypes(IdAlertTypes),
	Hour DateTime
)

























	
