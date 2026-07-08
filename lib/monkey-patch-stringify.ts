'use client';

const originalStringify = JSON.stringify;

(JSON as any).stringify = function(value: any, replacer?: any, space?: any): string {
  try {
    return originalStringify.call(JSON, value, replacer, space);
  } catch (e) {
    console.error('JSON.stringify failed:', e);
    console.error('Value that caused the error:', value);
    console.error('Stack trace for JSON.stringify failure:', new Error().stack); // Log the stack trace
    throw e;
  }
};
