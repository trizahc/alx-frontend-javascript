// Define MajorCredits interface with a brand
export interface MajorCredits {
  credits: number;
  __brand: 'major';
}

// Define MinorCredits interface with a brand
export interface MinorCredits {
  credits: number;
  __brand: 'minor';
}

// Function to sum MajorCredits
export function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: 'major',
  };
}

// Function to sum MinorCredits
export function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: 'minor',
  };
}
