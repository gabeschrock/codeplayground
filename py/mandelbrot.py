class sets:
    def __init__(self, max):
        self.max=max
    def mandelbrot(self, C):
        Z = C
        n = 1
        while abs(Z) < 2 and n < self.max:
            Z = Z ** 2 + C
            n += 1
        return n
