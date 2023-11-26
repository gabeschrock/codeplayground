'''Delivering messages with graph theory'''

class Node:
    message   = 0x000000 # 3 bytes
    last_sent = 0x000000 # 3 bytes
    def __init__(self, id: int, connections: list=[]) -> None:
        self.id = id
        self.connects = connections

    def recieve(self, From, Message) -> None:
        print(f'Node 0x{self.id:x} has recieved data 0x{Message:x} from node 0x{From:x}')
    
    def tick(self) -> None:
        msg = self.message
        to  = msg >> 16

        if to == 0:
            # reset and return
            self.last_sent = 0x000000
            self.message   = 0x000000
            return
        
        if msg == self.last_sent:                          # message already recieved
            self.message = 0x000000
            return

        if to == self.id:
            self.recieve((msg >> 8) % 0x100, msg % 0x0100) # extract second and third bytes
            self.message = 0x000000
            return

        for connect in self.connects:
            self.last_sent
            connect.message = msg
        
        self.message = 0x000000


nodeA          = Node(1,)
nodeB          = Node(2, [nodeA])
nodeA.connects = [nodeB]
nodeA.message  = 0x020110

for i in range(2):
    nodeA.tick()
    nodeB.tick()

nodeB.message  = 0x010220

for i in range(2):
    nodeA.tick()
    nodeB.tick()
