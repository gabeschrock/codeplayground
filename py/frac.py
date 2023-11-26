def fac(x: int) -> list:
    rtrn=[]
    for i in range(2,round(x+1)):
        if x/i == round(x/i):
            rtrn.append(i)
    return rtrn

def common(a: list, b: list):
    # a and b have an item in common
    for i in a:
        if i in b:
            return i
def frac(x: int, y: int):
    assert type(x) in [int,float] and type(y) in [int,float]
    assert x==round(x) and y==round(y)
    i=common(fac(x), fac(y))
    while i:
        x /= i
        y /= i
        i=common(fac(x), fac(y))
    return [round(x),round(y)]
if __name__ == '__main__':
    print(frac(2,10))
