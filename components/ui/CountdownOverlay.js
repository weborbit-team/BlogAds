"use client";

import { useState, useEffect } from "react";
import { Box, Button, Typography, CircularProgress } from "@mui/material";
import { styled } from "@mui/material/styles";

const BottomCountdown = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(3),
  backgroundColor: "rgba(128, 0, 128, 0.1)",
  borderRadius: theme.spacing(2),
  margin: theme.spacing(2, 0),
  gap: theme.spacing(2),
}));

export function BottomCountdownButton() {
  const [seconds, setSeconds] = useState(10);
  const [isComplete, setIsComplete] = useState(false);
  const [showCountdown, setShowCountdown] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (showCountdown && seconds > 0) {
      const timer = setTimeout(() => setSeconds(seconds - 1), 2000);
      return () => clearTimeout(timer);
    } else if (showCountdown && seconds === 0) {
      setIsComplete(true);
    }
  }, [seconds, showCountdown]);

  const handleClick = () => {
    if (!showCountdown) {
      setShowCountdown(true);
      setClicked(true);
    } else if (isComplete) {
      if (typeof window !== "undefined" && window.handleBottomContinue) {
        window.handleBottomContinue();
      }
    }
  };

  const progress = showCountdown ? ((10 - seconds) / 10) * 100 : 0;

  return (
    <BottomCountdown>
      {showCountdown && (
        <Box
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress
            variant="determinate"
            value={progress}
            size={80}
            thickness={4}
            sx={{ color: "purple" }}
          />
          <Typography
            sx={{
              position: "absolute",
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "primary.main",
            }}
          >
            {seconds}
          </Typography>
        </Box>
      )}

      <Button
        variant="contained"
        size="large"
        disabled={showCountdown && !isComplete}
        onClick={handleClick}
        sx={{
          minWidth: 180,
          backgroundColor: !showCountdown || isComplete ? "purple" : "grey.500",
          "&:hover": {
            backgroundColor:
              !showCountdown || isComplete ? "purple" : "grey.500",
          },
        }}
      >
        Continue
      </Button>

      {showCountdown && (
        <Typography variant="body2" color="grey.800">
          {!isComplete
            ? `Please wait ${seconds} seconds to continue`
            : "Click Continue to finish"}
        </Typography>
      )}
    </BottomCountdown>
  );
}

const CountdownContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(4),
  backgroundColor: "rgba(0, 0, 0, 0.1)",
  borderRadius: theme.spacing(2),
  margin: theme.spacing(2, 0),
  gap: theme.spacing(3),
}));

const ProgressContainer = styled(Box)({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const CountdownText = styled(Typography)(({ theme }) => ({
  position: "absolute",
  fontSize: "2rem",
  fontWeight: "bold",
  color: theme.palette.primary.main,
}));

export default function CountdownOverlay({ onComplete }) {
  const [seconds, setSeconds] = useState(10);
  const [isComplete, setIsComplete] = useState(false);
  const [showSecondStep, setShowSecondStep] = useState(false);

  useEffect(() => {
    if (seconds > 0) {
      const timer = setTimeout(() => setSeconds(seconds - 1), 2000);
      return () => clearTimeout(timer);
    } else {
      setIsComplete(true);
    }
  }, [seconds]);

  const handleFirstClick = () => {
    setShowSecondStep(true);
  };

  const progress = ((10 - seconds) / 10) * 100;

  return (
    <CountdownContainer>
      <ProgressContainer>
        <CircularProgress
          variant="determinate"
          value={progress}
          size={100}
          thickness={4}
          sx={{ color: "purple" }}
        />
        <CountdownText>{seconds}</CountdownText>
      </ProgressContainer>

      <Button
        variant="contained"
        size="large"
        disabled={!isComplete || showSecondStep}
        onClick={handleFirstClick}
        sx={{
          minWidth: 200,
          backgroundColor:
            isComplete && !showSecondStep ? "purple" : "grey.500",
          "&:hover": {
            backgroundColor:
              isComplete && !showSecondStep ? "purple" : "grey.500",
          },
        }}
      >
        {isComplete ? "Continue" : "Continue"}
      </Button>

      <Typography variant="body2" color="grey.800">
        {!isComplete
          ? `Please wait ${seconds} seconds to continue`
          : showSecondStep
          ? "Go to below and click on continue"
          : "Ready to proceed! Click to continue"}
      </Typography>
    </CountdownContainer>
  );
}
