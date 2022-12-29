class errors():
    class NodeError(Exception):
        pass
    class StackError(Exception):
        pass
class node():
    def __init__(self, val, after=None, prev=None):
        self.val = val
        self.after = after
        self.prev = prev
    def isolate(self):
        if self.next != None:
            self.next.prev = self.prev
            self.next = None
        if self.prev != None:
            self.prev.next = self.next
            self.prev = None
    def isNotLoop(self):
        after = self.after
        while True:
            if after == None:
                return True
            elif after == self:
                return False
            else:
                after = after.after
    def insertAfter(self, val):
        newNode = node(val, self.after, self)
        if self.after == None:
            self.after = newNode
            return None
        self.after.prev = newNode
        self.after = newNode
    def insertBefore(self, val):
        newNode = node(val, self, self.prev)
        if self.prev == None:
            self.prev = newNode
            return None
        self.prev.after = newNode
        self.prev = newNode
    def getList(self):
        if not self.isNotLoop():
            raise errors.NodeError('Node loop detected')
        prev = self
        while prev.prev != None:
            prev = prev.prev
        rtrn = []
        while prev.after != None:
            rtrn.append(prev.val)
            prev = prev.next
        rtrn.append(prev.val)
        return rtrn
class nodeStack():
    def __init__(self):
        self._val = []
    def push(self, val):
        if len(self._val) == 0:
            self._val = [node(val)]
        self._val[0].insertAfter(val)
        self._val[0:0] = self._val[0].after
    def peek(self):
        if len(self._val) == 0:
            raise errors.StackError('Empty stack')
        return self._val[0].val
    def pop(self):
        rtrn = self.peek().val
        del self._val[0]
        return rtrn
    def val(self):
        self._val.reverse()
        rtrn = []
        for node in self._val:
            rtrn.append(node.val)
        self._val.reverse()
        return rtrn
    def getList(self):
        return self.peek().getList()
LIFO = nodeStack
class FIFO():
    def __init__(self):
        self._val = []
    def push(self, val):
        if len(self._val) == 0:
            self._val = [node(val)]
        self._val[len(self._val) - 1].insertBefore(val)
        self._val.append(self._val[0].after)
    def peek(self):
        if len(self._val) == 0:
            raise errors.StackError('Empty FIFO stack')
        return self._val[0].val
    def pop(self):
        rtrn = self.peek().val
        del self._val[0].val
        return rtrn
    def val(self):
        self._val.reverse()
        rtrn = []
        for node in self._val:
            rtrn.append(node.val)
        self._val.reverse()
        return rtrn
    def getList(self):
        return self.peek().getList()
