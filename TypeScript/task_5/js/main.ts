export interface MajorCredits {
  credits: number;
  __brand: 'MajorCredits';
}

export interface MinorCredits {
  credits: number;
  __brand: 'MinorCredits';
}

// Factory functions to construct branded types
export function createMajorCredits(credits: number): MajorCredits {
  return { credits, __brand: 'MajorCredits' };
}

export function createMinorCredits(credits: number): MinorCredits {
  return { credits, __brand: 'MinorCredits' };
}

export function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return createMajorCredits(subject1.credits + subject2.credits);
}

export function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return createMinorCredits(subject1.credits + subject2.credits);
}
