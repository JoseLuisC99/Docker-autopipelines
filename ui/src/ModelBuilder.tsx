import { Box, Stack, Typography } from "@mui/material";
import { AnimatedPage } from "./AnimatedPage";

export function ModelBuilder() {
    return (
        <>
        <AnimatedPage>
        <Stack spacing={2}>
            <Box textAlign={'center'}>
            <Typography variant='h2'>Model builder</Typography>
            </Box>
        </Stack>
        </AnimatedPage>
        </>
    )
}