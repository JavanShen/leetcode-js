//https://leetcode-cn.com/problems/two-sum/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//暴力枚举
//双层遍历,如果两数之和等于target,则返回
var twoSum = function(nums, target) {
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]==target){
                return [i,j];
            }
        }
    }
    return [];
};

//hash表
var twoSum = function(nums, target) {
    let map=new Map()
    for(let i=0,len=nums.length;i<len;i++){
        //计算出当前数字和target的差值
        let num=target-nums[i]
        //如果map中存在num,则返回
        if(map.has(num)) return [i,map.get(num)]
        //否则将当前数字存入map
        map.set(nums[i],i)
    }
    return []
};
