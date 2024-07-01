from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/microsoft')
def microsoft():
    return render_template('microsoft_assist.html')

@app.route('/microsoft/word')
def microsoft_word():
    return render_template('microsoft/word.html')

@app.route('/browser')
def browser():
    return render_template('browser.html')

@app.route('/something_else')
def something_else():
    return render_template('something_else.html')

@app.route('/guide')
def guide():
    return render_template('guide.html')

if __name__ == '__main__':
    app.run(debug=True)
