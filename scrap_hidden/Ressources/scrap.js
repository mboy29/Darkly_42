import fetch from 'node-fetch';
import cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';

async function scrappingRecursive(url) {
    try {
        const response = await fetch(url);
        const body = await response.text();
        const $ = cheerio.load(body);

        const links = $('a');
        for (let i = 0; i < links.length; i++) {
            const finalLink = $(links[i]).attr('href');
            if (finalLink === 'README') {
                const readmeResponse = await fetch(url + finalLink);
                const readmeText = await readmeResponse.text();
                if (/flag/.test(readmeText)) {
                    console.log(readmeText);
                }
            } else if (finalLink !== '../') {
                await scrappingRecursive(url + finalLink);
            }
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

const baseUrl = 'http://10.43.200.97/.hidden/';
scrappingRecursive(baseUrl);
