
import time
from loguru import logger
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.by import By
from sys import stderr
from concurrent.futures import ThreadPoolExecutor
from modules.browser_creater import create_browser
import modules.mail_reader  as mail_reader
from selenium.webdriver.support import expected_conditions as EC

logger.remove()
logger.add(stderr,
           format="<white>{time:HH:mm:ss}</white> | <level>"
           "{level: <8}</level> | <cyan>"
           "{line}</cyan> - <white>{message}</white>")

def start(proxy, acc, sleep_time, number):
    try:
        if proxy_mode:
            if len(proxy.split("@")) != 1:
                logger.info(f"Changing {proxy} to type :")
                proxy = proxy.split("@")
                proxy = [proxy[1].split(":")[0], proxy[1].split(":")[1], proxy[0].split(":")[0], proxy[0].split(":")[1]]
            else:
                proxy = proxy.split(":")
                proxy = [proxy[0], proxy[1], proxy[2], proxy[3]]

        account_mail = acc.split(":")[0]
        account_pass = acc.split(":")[1]
        pass_ = acc.split(":")[2]
        account_serv = acc.split(":")[3]
        account_port = acc.split(":")[4]
        
        
        logger.info(f"Starting. Account {account_mail}, pass {account_pass}, mail server {account_serv}, port {account_port}. Proxy {proxy}")


        if mode == 1:
            logger.info(f"Sleeping before opening browser {sleep_time}")
            time.sleep(sleep_time)
        
        logger.info(f"Opening browser {number}")
        driver = create_browser(proxy, number, logger, path_to_captcha, proxy_mode, vpn, path_to_vpn)
        wait = WebDriverWait(driver, 120)

        driver.get("https://droppp.io/auth/")

        time.sleep(5)
        try:
            driver.find_element(By.ID, "cf-wrapper")

            if proxy_mode:
                pr =":".join(proxy)
                with open(r"failed_proxy.txt", "a") as f:
                    f.write(pr+"\n")

            logger.error(f"{pr} is banned. acc {acc}")
            driver.close()
            driver.quit()
            return
        except Exception as Err:     
            logger.debug(f"Proxy is ok {proxy}")
            if check_proxy:
                with open("proxy_good.txt", "a") as f:
                    f.write(":".join(proxy)+"\n")
                driver.close()
                driver.quit()   
                return


        logger.debug("loggining")
        wait.until(EC.presence_of_element_located((By.NAME, 'email'))).send_keys(account_mail)
        wait.until(EC.presence_of_element_located((By.CLASS_NAME, 'styles_container__7fpvR'))).click()
        
        time.sleep(10)
        logger.debug("sending pass")
        wait.until(EC.presence_of_element_located((By.NAME, 'password'))).send_keys(pass_)
        wait.until(EC.presence_of_element_located((By.CLASS_NAME, 'styles_container__7fpvR'))).click()

        time.sleep(5)
        
        if driver.current_url == 'https://droppp.io/email-verification/':
            for _ in range(3):
                logger.debug("getting email")
                get_code = mail_reader.get_code(account_mail, account_pass, account_serv, account_port, logger)
                if get_code:
                    break
                driver.refresh()
        
            if not get_code:
                logger.error(f"Skipping acc {account_mail}. Didn`t got code")

                with open(r"results\suc_reged_accounts.txt", "a") as f:
                    f.write(f"{account_mail}:{pass_}\n")

                if proxy_mode:
                    with open("results/failed_proxy.txt", "a") as f:
                        f.write(":".join(proxy)+ "\n")

                driver.close()
                driver.quit()
                return
            logger.info(f"Got_code {get_code} for acc {account_mail}")

            logger.debug("sending code")
            wait.until(EC.presence_of_element_located((By.XPATH, "//input[@type=\"tel\"]")))
            for j, i in enumerate(driver.find_elements(By.XPATH, "//input[@type=\"tel\"]")):
                i.send_keys(get_code[j])

            wait.until(EC.presence_of_element_located((By.CLASS_NAME, 'styles_container__7fpvR'))).click()
            
        else:

            logger.debug("Already registered. Successfully logined")
        
        driver.get("https://droppp.io/inventory/")
        
        time.sleep(10)
        logger.success(f"Succesfully registered or logined {acc}")
        if mode == 2:
            with open(r"results\suc_reged_accounts.txt", "a") as f:
                f.write(f"{account_mail}:{pass_}\n")
            
            if proxy_mode:
                with open(r"results\suc_reged_proxy.txt", "a") as f:
                    f.write(":".join(proxy) + "\n")

            driver.close()
            driver.quit()
        else:
            if link.lower() != "n":
                while True: 
                    if time.time() >= timestamp:
                        waiter = 0
                        driver.get(link)
                        waitt = WebDriverWait(driver, 10)
                        if solve_captcha:
                            while True:
                                try:
                                    text = waitt.until(EC.presence_of_element_located((By.XPATH, '/html/body/div[1]/div[1]/div[2]/div/div[2]/div[3]'))).text.split(" ")
                                    logger.info(f"Got text {text} for acc {account_mail}")
                                    first = None
                                    what_to_do = None
                                    second = None
                                    for i in text:
                                        if i == "plus":
                                            what_to_do = "plus"
                                        elif i == "minus":
                                            what_to_do = "minus"

                                        try:
                                            ch = None
                                            ch = int(i)
                                            if first == None and ch != None:
                                                first = ch
                                            elif first != None and ch != None:
                                                second = ch
                                        except:
                                            pass 
                                    if what_to_do == "minus":
                                        final = first-second
                                    else:
                                        final = first+second
                                    logger.info(f"Sending answer {final}. Debug: {what_to_do} 1 {first} 2 {second}")
                                    waitt.until(EC.presence_of_element_located((By.XPATH, '/html/body/div[1]/div[1]/div[2]/div/div[2]/form/input'))).send_keys(final)
                                    logger.debug("Sended answer")
                                    time.sleep(5)
                                    waitt.until(EC.presence_of_element_located((By.XPATH, '/html/body/div[1]/div[1]/div[2]/div/div[2]/form/button'))).click()
                                    logger.debug("clicked on button")
                                    time.sleep(50000)
                                except:
                                    try:
                            
                                        waitt.until(EC.presence_of_element_located((By.NAME, 'email'))).send_keys(account_mail)
                                        waitt.until(EC.presence_of_element_located((By.CLASS_NAME, 'styles_container__7fpvR'))).click()
                                        time.sleep(5)
                                        waitt.until(EC.presence_of_element_located((By.NAME, 'password'))).send_keys(pass_)
                                        waitt.until(EC.presence_of_element_located((By.CLASS_NAME, 'styles_container__7fpvR'))).click()
                                    except:
                                        pass
                                waiter += 1
                                if waiter == 10:
                                    driver.refresh()

                        else:
                            time.sleep(150000)
            else:
                time.sleep(150000)

    except Exception as Err:
        logger.error(Err)

        with open(r"results\failed_accounts.txt", "a") as f:
            f.write(acc + f" | {Err}\n")
        
        if proxy_mode:
            with open(r"results\failed_proxy.txt", "a") as f:
                f.write(proxy)

        driver.close()
        driver.quit()
        
        


if __name__ == "__main__":

    mode = int(input("Choose.\n1 - Enter the queue(keeping browser opened) \n2 - Register accounts(closing browser after all). "))
    if mode == 1:
        link = input("Go to some link(n/y)? ")
        if link.lower() == "y":
            link = input("Enter the link: ")
            timestamp = int(input("Enter timestamp when link will be opened"))
            solve_captcha = True if input("Solve captcha after sale start?(y/n) ").lower() == "y" else False

        sleep_time_between_accs = int(input("How much second to sleep between accounts(beginning to count at start of new browser). I recommend 30-40 "))

    
    proxy_mode = True if int(input("Choose.\n1 - use proxy\n2 - no ")) == 1 else False
    vpn = False
    path_to_vpn = None
    check_proxy = False
    if proxy_mode == 1:
        check_proxy = True if input("Check proxy on good/bad?(y/n) ").lower() == "y" else False

    else:
        vpn =  True if input("Load vpn?(y/n) ").lower() == "y" else False
        if vpn:
            path_to_vpn = str(input("Set a path to vpn directory "))
    
    threads = int(input("Thread count "))

    path_to_captcha = str(input("Path to captcha "))

    
    with open(r"resources\accounts.txt", "r") as f:
        accounts = f.read().splitlines()

    if proxy_mode:
        with open(r"resources\proxy.txt", "r") as f:
            proxy = f.read().splitlines()
    else:
        proxy = ["_" for _ in range(len(accounts))]


    count_accs = len(accounts)
    if mode == 1:
        counter = 0
        sleep_time = []
        for i in range(count_accs):
            sleep_time.append(counter)
            counter += sleep_time_between_accs

            if counter > threads*sleep_time_between_accs:
                counter = 0
                
        print(sleep_time) 
    else:
        sleep_time = ["_" for _ in range(count_accs)]
    number = [i for i in range(1, count_accs+1)]
    print(number)
    try:
        with ThreadPoolExecutor(max_workers=threads) as executor:
            executor.map(start, proxy, accounts, sleep_time, number)
    except Exception as Err:
        logger.error(Err)
    if mode == 1:
        input("Press enter to exit. ")
