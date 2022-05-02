from playwright.sync_api import sync_playwright

def test_loja_ebac():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=False)
        page = browser.new_page()
        page.goto("http://lojaebac.ebaconline.art.br/")
        assert page.title() == "EBAC – Shop – Página de teste"
        browser.close()