module.exports = ({env}) => ({
    upload: {
        config: {
            provider: 'aws-s3',
            providerOptions: {
                s3Options: {
                    credentials: {
                        accessKeyId: env('AWS2_ACCESS_KEY_ID'),
                        secretAccessKey: env('AWS2_ACCESS_SECRET'),
                    },
                    region: env('AWS2_REGION'),
                    params: {
                        Bucket: env('AWS2_BUCKET'),
                    },
                },
            },
            actionOptions: {
                upload: {},
                uploadStream: {},
                delete: {},
            },
        },
    },
});
