

let nums1=[1,2,3,0,0,0];
let nums2=[2,5,6];

var merge = function(nums1, m, nums2, n) {

  let newArr=[];

  for(let j=0;j<m-n;j++)
  {
      newArr.push(nums1[j]);
  }

   nums1=[...newArr,...nums2];

  for(let i =0;i<nums1.length;i++)
  {
      if(nums1[i]>nums1[i+1])
      {
          let temp = nums1[i];
          nums1[i]= nums1[i+1];
          nums1[i+1]= temp;
      }
  }


  
};

merge(nums1,nums1.length,nums2,nums2.length);

