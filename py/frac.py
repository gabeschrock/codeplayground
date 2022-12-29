def fac(x: int) -> list:
    # factors of x excluding 1
	rtrn = []
	for i in range(2, round(x) + 1):
	    if round(x) / i == round(round(x) / i):
            rtrn.append(i)
	return rtrn
def common(a: list, b: list):
    # a and b have an item in common
    for i in a:
        for j in b:
            if i == j:
                return i
def frac(x: int, y: int):
    i=common(fac(x), fac(y))
    while i:
        x /= i
        y /= i
        i=common(fac(x), fac(y))
        print(i)
    return [x,y]
if __name__ == '__main__':
    print(frac(1,5))
