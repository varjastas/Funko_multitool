import imaplib
import email
from re import search
from time import sleep
def get_code(login, pass_, server, port, console):
    for _ in range(10):
        try:
            mail = imaplib.IMAP4_SSL(server, int(port))
            mail.login(login, pass_)
            mail.list()
            mail.select("inbox")
            result, data = mail.search(None, "ALL")
            ids = data[0]
            id_list = ids.split()
            latest_email_id = id_list[-1]
            result, data = mail.fetch(latest_email_id, "(RFC822)") # Получаем тело письма (RFC822) для данного ID
        
            raw_email = data[0][1] # Тело письма в необработанном виде
            # включает в себя заголовки и альтернативные полезные нагрузки


            
            email_message = email.message_from_bytes(raw_email)

            addr = email.utils.parseaddr(email_message['From'])

            console.debug(f"message_from{addr}")

            if email.utils.parseaddr(email_message['From'])[1] == "support@droppp.io":

                maintype = email_message.get_content_maintype()
                

                if maintype == 'multipart':
                    for part in email_message.get_payload():
                        if part.get_content_maintype() == 'text':
                            text =  part.get_payload()
                elif maintype == 'text':
                    text =  email_message.get_payload()
            return search("\d\d\d\d\d\d", text).group(0)

        except Exception as Err:
            console.error(Err)
            sleep(5)
    console.error(f"skipping acc {login}:{pass_}:{server}:{port}. Didn`t got message or something else")
    return False