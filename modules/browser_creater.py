from loguru import logger
from zipfile import ZipFile
from fake_useragent import UserAgent
import undetected_chromedriver as uc
from time import sleep
from selenium.webdriver.common.by import By
import os
import random
def set_options(number, PROXY_HOST = None, PROXY_PORT=None, PROXY_USER = None, PROXY_PASS = None, path_to_captcha = None, proxy_mode = True, is_vpn = False, path_to_vpn = None):
    options = uc.ChromeOptions()
    if proxy_mode:
        pluginfile = f'proxy_auth_plugin{number}.zip'
        manifest_json = """
        {
            "version": "1.0.0",
            "manifest_version": 2,
            "name": "Chrome Proxy",
            "permissions": [
                "proxy",
                "tabs",
                "unlimitedStorage",
                "storage",
                "<all_urls>",
                "webRequest",
                "webRequestBlocking"
            ],
            "background": {
                "scripts": ["background.js"]
            },
            "minimum_chrome_version":"22.0.0"
        }
        """

        background_js = """
        var config = {
                mode: "fixed_servers",
                rules: {
                singleProxy: {
                    scheme: "http",
                    host: "%s",
                    port: parseInt(%s)
                },
                bypassList: ["localhost"]
                }
            };

        chrome.proxy.settings.set({value: config, scope: "regular"}, function() {});

        function callbackFn(details) {
            return {
                authCredentials: {
                    username: "%s",
                    password: "%s"
                }
            };
        }

        chrome.webRequest.onAuthRequired.addListener(
                    callbackFn,
                    {urls: ["<all_urls>"]},
                    ['blocking']
        );
        """ % (PROXY_HOST, PROXY_PORT, PROXY_USER, PROXY_PASS)

        with ZipFile(pluginfile, 'w') as zp:
            zp.writestr("manifest.json", manifest_json)
            zp.writestr("background.js", background_js)
        options.add_extension(pluginfile)
    elif is_vpn:
        options.add_argument(f"--load-extension={path_to_vpn}")
    prefs = {"profile.managed_default_content_settings.images": 2}
    options.add_experimental_option("prefs", prefs)
    options.add_experimental_option("excludeSwitches", ["enable-logging"])
    if path_to_vpn:
        options.add_argument(f"--load-extension={path_to_vpn},{path_to_captcha}")
    else:
        options.add_argument(f"--load-extension={path_to_captcha}")
    # options.add_argument(f"--load-extension={path_to_captcha}")
    options.add_argument(f"user-agent={get_ua()}")
    print(options.arguments)
    return options

def create_browser(proxy, number,  console, path_to_captcha, proxy_mode, is_vpn, path_to_vpn):
    try:
        if proxy_mode:
            options = set_options(number, PROXY_HOST=proxy[0], PROXY_PORT=proxy[1], PROXY_USER=proxy[2], PROXY_PASS=proxy[3], path_to_captcha=path_to_captcha, proxy_mode = proxy_mode, is_vpn=is_vpn, path_to_vpn=path_to_vpn)
        else:
            options = set_options(number, path_to_captcha=path_to_captcha, proxy_mode = proxy_mode, is_vpn=is_vpn, path_to_vpn=path_to_vpn)
        browser = uc.Chrome(options=options)
        if is_vpn:
            browser.get("chrome-extension://omghfjlpggmjjaagoclmmobgdodcjboh/popup/popup.html")
            sleep(4)
            try:
                script = """
                document.querySelector("body > div > page-switch").shadowRoot.querySelector("div > main-index").shadowRoot.querySelector("div.Switch > index-home").shadowRoot.querySelector("div.In.transition > div > div.Inactive > div.Inactive_ButtonOut > div").click();
                """
                browser.execute_script(script)
            except Exception as Err:
                print(Err)
                sleep(5000)
        sleep(3)
        browser.get('https://api.ipify.org/')
        sleep(5)
        ip_address = browser.find_element(By.TAG_NAME, "body").text

        with open("debug/test.txt", "a") as f:
            f.write(f'browser user-agent: {browser.execute_script("return navigator.userAgent")} ip: {ip_address}\n')
        with open("debug/proxy_test.txt", "a") as f:
            f.write(ip_address+"\n")
        console.info(f'browser user-agent: {browser.execute_script("return navigator.userAgent")} ip: {ip_address}')

        if proxy_mode:
            pluginfile = f'proxy_auth_plugin{number}.zip'
            try:
                os.remove(pluginfile)
            except Exception as Err:
                logger.info(f"Failed to remove extension {pluginfile}. Err {Err}")

        return browser
    except Exception as Err:
        logger.error(Err)
        raise Exception

def get_ua():
    ua = UserAgent()
    uaq = str(ua.chrome)
    uaq = uaq.replace(uaq[uaq.find("Chrome/"):uaq.find("Safari")], "Chrome/108.0.0.0 " )
    return uaq
