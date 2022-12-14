let numbas = [1,2,3,4,5,6,7,8,9,10,11,2,3,3,4,5]


class Statistics{
    constructor(arr){
        this.arr = arr
    }

    static mean(arr){
        let output = 0
        for(let i = 0; i < arr.length; i++){
            output += arr[i]
        }
        return `${output/2} is the Mean`
    }

    static median(arr){
        // to calculate the most occuring

        let sortedArray = arr.sort((a,b)=>a -b)
        const sortTotal = sortedArray.reduce((x,y)=>x + y,0)
        console.log(sortedArray)


        
        if(sortTotal %2 == 0){
            // let obj = Object.keys
            let first = Math.round((sortedArray.length + 1)/2)
            let last = Math.round(10/2 +1)
            let sortedArrayFirst = sortedArray[first]
            let sortedArrayLast = sortedArray[last]
            let result = Math.round((sortedArrayFirst + sortedArrayLast)/2)
            return `${result} is the Median`
        }else{
            let firstNum = Math.round((sortedArray.length)/2)
            console.log(firstNum)
            let resultArray = sortedArray[firstNum]
            return `${resultArray} is the Median here`

        }
    }

    static mode(arr){
        // to calculate the most occuring
        let counts = {}
        for(let i =0; i < arr.length; i++){
            if(counts[arr[i]]){
                counts[arr[i]] += 1;
            }else{
                counts[arr[i]] =1;
            }
        }
        let sorted = []
        let run = function(obj){
            let theKeys = Object.keys(obj)
            if(theKeys.length === 0){
                return false  
            } 
            let least1 = theKeys[0]
            for(let key in obj){
                if(counts[key] < counts[least1]){
                    least1 = parseInt(key)
                }
            }
            sorted.push(parseInt(least1))
            delete obj[least1.toString()]
            return run(obj)

        }
        run(counts)
        let lent = sorted.length
        return `${sorted[lent -1 ]} is the Mode`

    }
    static range(arr){
        let sortedArray = arr.sort((a,b)=>a -b)
        let lent = sortedArray.length
        let newSortHighestNumber = sortedArray[lent -1 ]
        let newSortLowestNumber = sortedArray[0]
        return `${newSortHighestNumber - newSortLowestNumber} is the Range`
    }
        
    static variance(arr){
        let num = arr.length
        let sum = arr.reduce((x,y)=>x + y,0)
        let resul = sum/num
        let variancee = 0;
        arr.forEach(num =>{
            variancee +=((num - resul) * (num - resul))
        })
        variancee /= num
        return `${variancee} is the Variance`
    }
    
}

// let stat = new Statistics()
console.log(Statistics.median(numbas))