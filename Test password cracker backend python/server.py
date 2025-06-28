from flask import Flask, render_template, request, jsonify
import itertools
import time
from multiprocessing import Process, Queue

app = Flask(__name__)

charset = "azertyuiopqsdfghjklmwxcvbnAZERTYUIOPQSDFGHJKLMWXCVBN0123456789&@#~_--+*/!?"

def crack_worker(target, length, charset, queue):
    attempts = 0
    for guess_tuple in itertools.product(charset, repeat=length):
        guess = ''.join(guess_tuple)
        attempts += 1
        if guess == target:
            queue.put({
                "result": guess,
                "length": length,
                "attempts": attempts
            })
            return

def brute_force_parallel(target):
    start = time.time()
    queue = Queue()
    processes = []

    max_len = len(target)
    for length in range(1, max_len + 1):
        p = Process(target=crack_worker, args=(target, length, charset, queue))
        p.start()
        processes.append(p)

    result = queue.get()  

    # Arrête les autres processus
    for p in processes:
        p.terminate()

    return {
        "result": result["result"],
        "time": round(time.time() - start, 3),
        "attempts": result["attempts"]
    }

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/crack", methods=["POST"])
def crack():
    data = request.get_json()
    pwd = data.get("password", "")
    return jsonify(brute_force_parallel(pwd))

if __name__ == "__main__":
    app.run(debug=True)
