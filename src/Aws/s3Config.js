import AWS from "aws-sdk";

const s3 = new AWS.S3({
  accessKeyId: "AKIA23ZH2ZFBXM65LLWW",
  secretAccessKey: "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",
  region: "ap-northeast-2",
});

export default s3;

/** 뭔가 바뀌었음~ test 2*/
