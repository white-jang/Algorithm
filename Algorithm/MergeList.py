'''
BOJ 11728
정렬되어있는 두 배열 A와 B가 주어진다. 두 배열을 합친 다음 정렬해서 출력하는 프로그램을 작성하시오.

첫째 줄에 배열 A의 크기 N, 배열 B의 크기 M이 주어진다. (1 ≤ N, M ≤ 1,000,000)
둘째 줄에는 배열 A의 내용이, 셋째 줄에는 배열 B의 내용이 주어진다. 배열에 들어있는 수는 절댓값이 109보다 작거나 같은 정수이다.

첫째 줄에 두 배열을 합친 후 정렬한 결과를 출력한다.
'''

a = []
b = []

n, m = map(int, input('N, M :').split())
a = list((map(int, input('A : ').split())))
b = list((map(int, input('B : ').split())))

def merge(a, b):
    result = [] # 합병 결과를 담을 리스트
    i = 0 # 배열 a의 인덱스
    j = 0 # 배열 b의 인덱스
    while (i < len(a) and j < len(b)):
        if (a[i] > b[j]): 
            result.append(b[j])
            j = j+1
        else:
            result.append(a[i])
            i = i+1
    if (j == len(b)): # 배열 a에 원소가 남아있는 경우
        for k in range(i, len(a)):
            result.append(a[k])
    if (i == len(a)): # 배열 b에 원소가 남아있는 경우
        for l in range(j, len(b)):
            result.append(b[l])
    return result

print(merge(a, b))


'''
합병 정렬을 이용하지 않고 푸는 방법 

result = a+b
result.sort()

print("result :", end=' ')
for i in result:
    print(i, end=' ')
'''