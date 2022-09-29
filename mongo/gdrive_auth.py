from __future__ import print_function

from googleapiclient import discovery
from httplib2 import Http
from oauth2client import file, client, tools
from oauth2client.tools import argparser, run_flow

store = file.Storage('.gkey_auto')
SCOPES = 'https://www.googleapis.com/auth/drive.readonly.metadata'

creds = store.get()
#creds = None
args = argparser.parse_args()
args.noauth_local_webserver = True
if not creds or creds.invalid:
    flow = client.flow_from_clientsecrets('.gkey', SCOPES)
    creds = tools.run_flow(flow, store, args)
DRIVE = discovery.build('drive', 'v3', http=creds.authorize(Http()))

folder_id = "1xinOcDcobce8SU0Dw6vZOZPkEifAi4sY"

files = []
page_token = None
while True:
    response = DRIVE.files().list(
        q="'1xinOcDcobce8SU0Dw6vZOZPkEifAi4sY' in parents",
        spaces='drive',
        fields='nextPageToken, '
               'files(id, name)',
        pageToken=page_token
    ).execute()
    for file in response.get('files', []):
        # Process change
        print(F'Found file: {file.get("name")}, {file.get("id")}')
    files.extend(response.get('files', []))
    page_token = response.get('nextPageToken', None)
    if page_token is None:
        break



# and mimeType='application/vnd.google-apps.folder'