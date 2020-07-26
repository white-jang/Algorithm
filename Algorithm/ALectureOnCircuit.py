'''
BOJ 2109

한 저명한 학자에게 n(0≤n≤10,000)개의 대학에서 강연 요청을 해 왔다. 각 대학에서는 d(1≤d≤10,000)일 안에 와서 강연을 해 주면 p(1≤p≤10,000)만큼의 강연료를 지불하겠다고 알려왔다. 
각 대학에서 제시하는 d와 p값은 서로 다를 수도 있다. 이 학자는 이를 바탕으로, 가장 많은 돈을 벌 수 있도록 순회강연을 하려 한다. 
강연의 특성상, 이 학자는 하루에 최대 한 곳에서만 강연을 할 수 있다.

예를 들어 네 대학에서 제시한 p값이 각각 50, 10, 20, 30이고, d값이 차례로 2, 1, 2, 1 이라고 하자. 
이럴 때에는 첫째 날에 4번 대학에서 강연을 하고, 둘째 날에 1번 대학에서 강연을 하면 80만큼의 돈을 벌 수 있다.
'''


from queue import PriorityQueue

def daySort(element):
    return element[1]

lectureCircuit = [] # 강의 정보를 담을 리스트
queue = PriorityQueue() # 우선순위 큐 선언 (최소 히프)
total = 0

n = int(input())
for i in range(n):
    p, d = input().split()
    p = int(p)
    d = int(d)
    lectureCircuit.append([p,d])

lectureCircuit.sort(key=daySort) # day를 기준으로 오름차순 정렬

for j in range(n):
    total += lectureCircuit[j][0] # 먼저 강연료를 더하고
    queue.put(lectureCircuit[j][0]) # 큐에 강연료 넣기
    if (queue.qsize() > lectureCircuit[j][1]): # 강연을 갈 날짜와 day를 비교
        total -= queue.get() # 총 강연료에서 꼭대기의 값만큼 삭제

print("total =", total)