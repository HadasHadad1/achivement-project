USE [achievement]
GO
/****** Object:  Table [dbo].[AlertDates]    Script Date: 28/03/2024 06:05:07 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AlertDates](
	[IdAlertDate] [int] IDENTITY(1,1) NOT NULL,
	[IdTargets] [int] NOT NULL,
	[Date] [datetime] NULL,
	[Status] [bit] NOT NULL,
	[ExecutionDate] [datetime] NULL,
PRIMARY KEY CLUSTERED 
(
	[IdAlertDate] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AlertHours]    Script Date: 28/03/2024 06:05:08 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AlertHours](
	[IdAlertHours] [int] IDENTITY(1,1) NOT NULL,
	[IdTargets] [int] NULL,
	[IdAlertTypes] [int] NULL,
	[Hour] [time](7) NULL,
PRIMARY KEY CLUSTERED 
(
	[IdAlertHours] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AlertTypes]    Script Date: 28/03/2024 06:05:08 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AlertTypes](
	[IdAlertTypes] [int] IDENTITY(1,1) NOT NULL,
	[Description] [nvarchar](20) NULL,
PRIMARY KEY CLUSTERED 
(
	[IdAlertTypes] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Frequency]    Script Date: 28/03/2024 06:05:08 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Frequency](
	[IdFrequency] [int] IDENTITY(1,1) NOT NULL,
	[IdTargets] [int] NULL,
	[Note] [nvarchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[IdFrequency] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[FrequencyTypes]    Script Date: 28/03/2024 06:05:08 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FrequencyTypes](
	[IdFrequencyTypes] [int] IDENTITY(1,1) NOT NULL,
	[Description] [nvarchar](20) NULL,
PRIMARY KEY CLUSTERED 
(
	[IdFrequencyTypes] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Performence]    Script Date: 28/03/2024 06:05:08 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Performence](
	[IdPerformence] [int] IDENTITY(1,1) NOT NULL,
	[IdTargets] [int] NOT NULL,
	[ExecutionDate] [date] NULL,
	[CountPerformence] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[IdPerformence] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Targets]    Script Date: 28/03/2024 06:05:08 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Targets](
	[IdTargets] [int] IDENTITY(1,1) NOT NULL,
	[TzUser] [nvarchar](9) NULL,
	[Description] [nvarchar](20) NULL,
	[IdFrequencyTypes] [int] NULL,
	[StartDate] [date] NOT NULL,
	[EndDate] [date] NULL,
	[SeveralTimesADay] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[IdTargets] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 28/03/2024 06:05:08 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[Tz] [nvarchar](9) NOT NULL,
	[FirstName] [nvarchar](10) NULL,
	[LastName] [nvarchar](10) NULL,
	[Email] [nvarchar](50) NULL,
	[Pasword] [nvarchar](20) NULL,
	[Phone] [nvarchar](10) NULL,
	[Gender] [nvarchar](8) NULL,
PRIMARY KEY CLUSTERED 
(
	[Tz] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[AlertDates] ON 

INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (1, 1, CAST(N'2024-03-21T09:00:00.000' AS DateTime), 0, NULL)
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (4, 1, CAST(N'2024-03-13T18:00:00.000' AS DateTime), 1, CAST(N'2024-03-21T18:00:00.000' AS DateTime))
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (5, 1, CAST(N'2024-03-14T00:00:00.000' AS DateTime), 0, NULL)
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (6, 1, CAST(N'2024-03-14T16:00:00.000' AS DateTime), 1, CAST(N'2024-03-25T23:45:07.723' AS DateTime))
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (7, 1, CAST(N'2024-03-16T00:00:00.000' AS DateTime), 0, NULL)
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (8, 1, CAST(N'2024-03-17T00:00:00.000' AS DateTime), 0, NULL)
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (9, 1, CAST(N'2024-03-18T00:00:00.000' AS DateTime), 0, NULL)
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (10, 1, CAST(N'2024-03-19T00:00:00.000' AS DateTime), 1, CAST(N'2024-03-26T23:08:04.070' AS DateTime))
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (11, 1, CAST(N'2024-03-20T00:00:00.000' AS DateTime), 0, NULL)
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (12, 2, CAST(N'2024-03-16T00:00:00.000' AS DateTime), 0, NULL)
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (13, 2, CAST(N'2024-03-17T00:00:00.000' AS DateTime), 0, NULL)
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (14, 2, CAST(N'2024-03-18T00:00:00.000' AS DateTime), 0, NULL)
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (15, 2, CAST(N'2024-03-19T00:00:00.000' AS DateTime), 0, NULL)
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (16, 2, CAST(N'2024-03-20T00:00:00.000' AS DateTime), 0, NULL)
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (17, 2, CAST(N'2024-03-21T00:00:00.000' AS DateTime), 1, CAST(N'2024-03-26T23:02:57.257' AS DateTime))
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (18, 2, CAST(N'2024-03-22T00:00:00.000' AS DateTime), 0, NULL)
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (19, 2, CAST(N'2024-03-23T00:00:00.000' AS DateTime), 0, NULL)
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (20, 5, CAST(N'2024-03-17T00:00:00.000' AS DateTime), 0, NULL)
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (21, 5, CAST(N'2024-03-19T00:00:00.000' AS DateTime), 0, NULL)
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (22, 5, CAST(N'2024-03-21T00:00:00.000' AS DateTime), 0, NULL)
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (23, 5, CAST(N'2024-03-24T00:00:00.000' AS DateTime), 0, NULL)
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (24, 5, CAST(N'2024-03-26T00:00:00.000' AS DateTime), 0, NULL)
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (25, 5, CAST(N'2024-03-27T02:00:00.000' AS DateTime), 1, CAST(N'2024-03-25T23:12:26.223' AS DateTime))
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (26, 5, CAST(N'2024-03-28T02:00:00.000' AS DateTime), 0, NULL)
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (27, 5, CAST(N'2024-04-02T00:00:00.000' AS DateTime), 0, NULL)
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (28, 5, CAST(N'2024-04-04T00:00:00.000' AS DateTime), 0, NULL)
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (29, 5, CAST(N'2024-04-06T18:00:00.000' AS DateTime), 0, CAST(N'2024-03-26T23:08:25.190' AS DateTime))
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (30, 5, CAST(N'2024-04-09T00:00:00.000' AS DateTime), 0, NULL)
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (31, 5, CAST(N'2024-04-11T00:00:00.000' AS DateTime), 0, NULL)
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (45, 10, CAST(N'2024-03-31T21:00:00.000' AS DateTime), 0, NULL)
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (46, 10, CAST(N'2024-03-31T21:30:00.000' AS DateTime), 0, NULL)
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (47, 10, CAST(N'2024-04-01T21:00:00.000' AS DateTime), 0, NULL)
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (48, 10, CAST(N'2024-04-01T21:30:00.000' AS DateTime), 0, NULL)
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (49, 10, CAST(N'2024-04-02T21:00:00.000' AS DateTime), 0, NULL)
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (50, 10, CAST(N'2024-04-02T21:30:00.000' AS DateTime), 0, NULL)
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (51, 10, CAST(N'2024-04-03T21:00:00.000' AS DateTime), 0, NULL)
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (52, 10, CAST(N'2024-04-03T21:30:00.000' AS DateTime), 0, NULL)
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (53, 10, CAST(N'2024-04-04T21:00:00.000' AS DateTime), 0, NULL)
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (54, 10, CAST(N'2024-04-04T21:30:00.000' AS DateTime), 0, NULL)
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (55, 10, CAST(N'2024-04-05T21:00:00.000' AS DateTime), 0, NULL)
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (56, 10, CAST(N'2024-04-05T21:30:00.000' AS DateTime), 0, NULL)
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (57, 10, CAST(N'2024-04-06T21:00:00.000' AS DateTime), 0, NULL)
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (58, 10, CAST(N'2024-04-06T21:30:00.000' AS DateTime), 0, NULL)
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (59, 10, CAST(N'2024-04-07T21:00:00.000' AS DateTime), 0, NULL)
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (60, 10, CAST(N'2024-04-07T21:30:00.000' AS DateTime), 0, NULL)
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (61, 10, CAST(N'2024-04-08T21:00:00.000' AS DateTime), 0, NULL)
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (62, 10, CAST(N'2024-04-08T21:30:00.000' AS DateTime), 0, NULL)
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (63, 10, CAST(N'2024-04-09T21:00:00.000' AS DateTime), 0, NULL)
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (64, 10, CAST(N'2024-04-09T21:30:00.000' AS DateTime), 0, NULL)
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (65, 11, CAST(N'2024-04-09T21:00:00.000' AS DateTime), 0, NULL)
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (66, 11, CAST(N'2024-04-09T22:00:00.000' AS DateTime), 0, NULL)
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (67, 11, CAST(N'2024-04-10T21:00:00.000' AS DateTime), 0, NULL)
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (68, 11, CAST(N'2024-04-10T22:00:00.000' AS DateTime), 0, NULL)
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (69, 11, CAST(N'2024-04-11T21:00:00.000' AS DateTime), 0, NULL)
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (70, 11, CAST(N'2024-04-11T22:00:00.000' AS DateTime), 0, NULL)
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (71, 11, CAST(N'2024-04-12T21:00:00.000' AS DateTime), 0, NULL)
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (72, 11, CAST(N'2024-04-12T22:00:00.000' AS DateTime), 0, NULL)
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (73, 11, CAST(N'2024-04-13T21:00:00.000' AS DateTime), 0, NULL)
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (74, 11, CAST(N'2024-04-13T22:00:00.000' AS DateTime), 0, NULL)
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (75, 11, CAST(N'2024-04-14T21:00:00.000' AS DateTime), 0, NULL)
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (76, 11, CAST(N'2024-04-14T22:00:00.000' AS DateTime), 0, NULL)
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (77, 11, CAST(N'2024-04-15T21:00:00.000' AS DateTime), 0, NULL)
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (78, 11, CAST(N'2024-04-15T22:00:00.000' AS DateTime), 0, NULL)
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (79, 11, CAST(N'2024-04-16T21:00:00.000' AS DateTime), 0, NULL)
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (80, 11, CAST(N'2024-04-16T22:00:00.000' AS DateTime), 0, NULL)
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (81, 11, CAST(N'2024-04-17T21:00:00.000' AS DateTime), 0, NULL)
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (82, 11, CAST(N'2024-04-17T22:00:00.000' AS DateTime), 0, NULL)
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (83, 11, CAST(N'2024-04-18T21:00:00.000' AS DateTime), 0, NULL)
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (84, 11, CAST(N'2024-04-18T22:00:00.000' AS DateTime), 0, NULL)
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (85, 11, CAST(N'2024-04-19T21:00:00.000' AS DateTime), 0, NULL)
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (86, 11, CAST(N'2024-04-19T22:00:00.000' AS DateTime), 0, NULL)
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (87, 11, CAST(N'2024-04-20T21:00:00.000' AS DateTime), 0, NULL)
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (88, 11, CAST(N'2024-04-20T22:00:00.000' AS DateTime), 0, NULL)
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (89, 11, CAST(N'2024-04-21T21:00:00.000' AS DateTime), 0, NULL)
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (90, 11, CAST(N'2024-04-21T22:00:00.000' AS DateTime), 0, NULL)
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (91, 11, CAST(N'2024-04-22T21:00:00.000' AS DateTime), 0, NULL)
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (92, 11, CAST(N'2024-04-22T22:00:00.000' AS DateTime), 0, NULL)
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (93, 11, CAST(N'2024-04-23T21:00:00.000' AS DateTime), 0, NULL)
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (94, 11, CAST(N'2024-04-23T22:00:00.000' AS DateTime), 0, NULL)
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (125, 13, CAST(N'2024-04-16T14:00:00.000' AS DateTime), 0, NULL)
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (126, 13, CAST(N'2024-04-16T14:30:00.000' AS DateTime), 0, NULL)
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (127, 13, CAST(N'2024-04-18T14:00:00.000' AS DateTime), 0, NULL)
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (128, 13, CAST(N'2024-04-18T14:30:00.000' AS DateTime), 0, NULL)
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (129, 13, CAST(N'2024-04-21T14:00:00.000' AS DateTime), 0, NULL)
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (130, 13, CAST(N'2024-04-21T14:30:00.000' AS DateTime), 0, NULL)
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (131, 13, CAST(N'2024-04-23T11:00:00.000' AS DateTime), 1, CAST(N'2024-03-28T03:47:32.547' AS DateTime))
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (132, 13, CAST(N'2024-04-23T14:30:00.000' AS DateTime), 0, NULL)
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (133, 14, CAST(N'2024-03-13T04:00:00.000' AS DateTime), 0, NULL)
INSERT [dbo].[AlertDates] ([IdAlertDate], [IdTargets], [Date], [Status], [ExecutionDate]) VALUES (134, 14, CAST(N'2024-03-13T05:00:00.000' AS DateTime), 0, NULL)
SET IDENTITY_INSERT [dbo].[AlertDates] OFF
SET IDENTITY_INSERT [dbo].[AlertHours] ON 

INSERT [dbo].[AlertHours] ([IdAlertHours], [IdTargets], [IdAlertTypes], [Hour]) VALUES (1, 1, 1, CAST(N'18:00:00' AS Time))
INSERT [dbo].[AlertHours] ([IdAlertHours], [IdTargets], [IdAlertTypes], [Hour]) VALUES (2, 4, 1, CAST(N'09:00:00' AS Time))
SET IDENTITY_INSERT [dbo].[AlertHours] OFF
SET IDENTITY_INSERT [dbo].[AlertTypes] ON 

INSERT [dbo].[AlertTypes] ([IdAlertTypes], [Description]) VALUES (1, N'email')
SET IDENTITY_INSERT [dbo].[AlertTypes] OFF
SET IDENTITY_INSERT [dbo].[Frequency] ON 

INSERT [dbo].[Frequency] ([IdFrequency], [IdTargets], [Note]) VALUES (1, 1, N'לא לשכוח לסיים את הפרויקט')
SET IDENTITY_INSERT [dbo].[Frequency] OFF
SET IDENTITY_INSERT [dbo].[FrequencyTypes] ON 

INSERT [dbo].[FrequencyTypes] ([IdFrequencyTypes], [Description]) VALUES (1, N'daily')
INSERT [dbo].[FrequencyTypes] ([IdFrequencyTypes], [Description]) VALUES (2, N'weekly')
INSERT [dbo].[FrequencyTypes] ([IdFrequencyTypes], [Description]) VALUES (3, N'monthly')
INSERT [dbo].[FrequencyTypes] ([IdFrequencyTypes], [Description]) VALUES (4, N'yearly')
SET IDENTITY_INSERT [dbo].[FrequencyTypes] OFF
SET IDENTITY_INSERT [dbo].[Performence] ON 

INSERT [dbo].[Performence] ([IdPerformence], [IdTargets], [ExecutionDate], [CountPerformence]) VALUES (1, 1, NULL, 5)
INSERT [dbo].[Performence] ([IdPerformence], [IdTargets], [ExecutionDate], [CountPerformence]) VALUES (2, 2, NULL, 6)
INSERT [dbo].[Performence] ([IdPerformence], [IdTargets], [ExecutionDate], [CountPerformence]) VALUES (3, 3, NULL, 10)
INSERT [dbo].[Performence] ([IdPerformence], [IdTargets], [ExecutionDate], [CountPerformence]) VALUES (4, 4, NULL, 20)
INSERT [dbo].[Performence] ([IdPerformence], [IdTargets], [ExecutionDate], [CountPerformence]) VALUES (5, 5, NULL, 30)
INSERT [dbo].[Performence] ([IdPerformence], [IdTargets], [ExecutionDate], [CountPerformence]) VALUES (6, 10, NULL, 0)
INSERT [dbo].[Performence] ([IdPerformence], [IdTargets], [ExecutionDate], [CountPerformence]) VALUES (7, 11, NULL, 6)
INSERT [dbo].[Performence] ([IdPerformence], [IdTargets], [ExecutionDate], [CountPerformence]) VALUES (8, 13, NULL, 0)
INSERT [dbo].[Performence] ([IdPerformence], [IdTargets], [ExecutionDate], [CountPerformence]) VALUES (9, 14, NULL, 0)
SET IDENTITY_INSERT [dbo].[Performence] OFF
SET IDENTITY_INSERT [dbo].[Targets] ON 

INSERT [dbo].[Targets] ([IdTargets], [TzUser], [Description], [IdFrequencyTypes], [StartDate], [EndDate], [SeveralTimesADay]) VALUES (1, N'123456789', N'סיום הפרויקט', 1, CAST(N'2024-03-12' AS Date), CAST(N'2024-03-20' AS Date), 2)
INSERT [dbo].[Targets] ([IdTargets], [TzUser], [Description], [IdFrequencyTypes], [StartDate], [EndDate], [SeveralTimesADay]) VALUES (2, N'123456789', N'ללכת לחתונה', 1, CAST(N'2024-03-16' AS Date), CAST(N'2024-03-24' AS Date), 0)
INSERT [dbo].[Targets] ([IdTargets], [TzUser], [Description], [IdFrequencyTypes], [StartDate], [EndDate], [SeveralTimesADay]) VALUES (3, N'123456789', N'כושר', 2, CAST(N'2024-03-16' AS Date), CAST(N'2024-03-30' AS Date), 0)
INSERT [dbo].[Targets] ([IdTargets], [TzUser], [Description], [IdFrequencyTypes], [StartDate], [EndDate], [SeveralTimesADay]) VALUES (4, N'123456789', N'כושררררררר', 2, CAST(N'2024-03-16' AS Date), CAST(N'2024-03-30' AS Date), 0)
INSERT [dbo].[Targets] ([IdTargets], [TzUser], [Description], [IdFrequencyTypes], [StartDate], [EndDate], [SeveralTimesADay]) VALUES (5, N'123456789', N'ניסויייי', 2, CAST(N'2024-03-16' AS Date), CAST(N'2024-04-11' AS Date), 0)
INSERT [dbo].[Targets] ([IdTargets], [TzUser], [Description], [IdFrequencyTypes], [StartDate], [EndDate], [SeveralTimesADay]) VALUES (10, N'123456789', N'התעמלות מים', 1, CAST(N'2024-03-31' AS Date), CAST(N'2024-04-09' AS Date), 2)
INSERT [dbo].[Targets] ([IdTargets], [TzUser], [Description], [IdFrequencyTypes], [StartDate], [EndDate], [SeveralTimesADay]) VALUES (11, N'123456789', N'דיאטה', 1, CAST(N'2024-04-09' AS Date), CAST(N'2024-04-23' AS Date), 2)
INSERT [dbo].[Targets] ([IdTargets], [TzUser], [Description], [IdFrequencyTypes], [StartDate], [EndDate], [SeveralTimesADay]) VALUES (13, N'123456789', N'להגיש את הפרויקט', 2, CAST(N'2024-04-15' AS Date), CAST(N'2024-04-22' AS Date), 2)
INSERT [dbo].[Targets] ([IdTargets], [TzUser], [Description], [IdFrequencyTypes], [StartDate], [EndDate], [SeveralTimesADay]) VALUES (14, N'123456789', N'קורס', 3, CAST(N'2024-03-12' AS Date), CAST(N'2024-03-19' AS Date), 2)
SET IDENTITY_INSERT [dbo].[Targets] OFF
INSERT [dbo].[Users] ([Tz], [FirstName], [LastName], [Email], [Pasword], [Phone], [Gender]) VALUES (N'121212121', N'הדס', N'חדד', N'hadas@gmail.com', N'123456', N'0502368978', N'נקבה')
INSERT [dbo].[Users] ([Tz], [FirstName], [LastName], [Email], [Pasword], [Phone], [Gender]) VALUES (N'123456789', N'ברכה', N'אביטן', N'bracha53585@gmail.com', N'123456', N'0533163715', N'נקבה')
INSERT [dbo].[Users] ([Tz], [FirstName], [LastName], [Email], [Pasword], [Phone], [Gender]) VALUES (N'222222222', N'יעל', N'לוי', N'y@gmail.com', N'y123456', N'0502589632', N'נקבה')
INSERT [dbo].[Users] ([Tz], [FirstName], [LastName], [Email], [Pasword], [Phone], [Gender]) VALUES (N'565656565', N'משה', N'לוי', N'bracha53585@gmail.com', N'123456', N'0523698745', N'זכר')
ALTER TABLE [dbo].[AlertDates]  WITH CHECK ADD FOREIGN KEY([IdTargets])
REFERENCES [dbo].[Targets] ([IdTargets])
GO
ALTER TABLE [dbo].[AlertHours]  WITH CHECK ADD FOREIGN KEY([IdAlertTypes])
REFERENCES [dbo].[AlertTypes] ([IdAlertTypes])
GO
ALTER TABLE [dbo].[AlertHours]  WITH CHECK ADD FOREIGN KEY([IdTargets])
REFERENCES [dbo].[Targets] ([IdTargets])
GO
ALTER TABLE [dbo].[Frequency]  WITH CHECK ADD FOREIGN KEY([IdTargets])
REFERENCES [dbo].[Targets] ([IdTargets])
GO
ALTER TABLE [dbo].[Performence]  WITH CHECK ADD FOREIGN KEY([IdTargets])
REFERENCES [dbo].[Targets] ([IdTargets])
GO
ALTER TABLE [dbo].[Targets]  WITH CHECK ADD FOREIGN KEY([IdFrequencyTypes])
REFERENCES [dbo].[FrequencyTypes] ([IdFrequencyTypes])
GO
ALTER TABLE [dbo].[Targets]  WITH CHECK ADD FOREIGN KEY([TzUser])
REFERENCES [dbo].[Users] ([Tz])
GO
