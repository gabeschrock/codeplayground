def fac(x: int) -> list:
    rtrn=[]
    for i in range(2,x+1):
        if type(x/i) == int:
            rtrn.append(x)
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
